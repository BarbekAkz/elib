import { CInput } from "../../../components/CInput";
import { MenuEdge } from "../../../components/MenuEdge";
import { ModalBackground } from "../../../components/ModalBackground";
import { COLORS } from "../../../constants/ui";
import { findObjectInArray } from "../../../utils/findObjectInArray";
import { useState, useRef } from "react";
import c from './MetadataWindow.module.css'

export const MetadataWindow = ({
  book,
  metadataWindowState,
  savedBooksState
}) => {
  const [nameValue, setNameValue] = useState(book.name);
  const [authorValue, setAuthorValue] = useState(book.author);
  const [yearValue, setYearValue] = useState(book.year);

  function cancel() { 
    metadataWindowState.setOpened(false)
  }

  function editBookMetadata() {
    const books = savedBooksState.savedBooks;
    const editingBook = findObjectInArray(books, book.id, 'id');
    
    if (!editingBook)
    { console.error('Книга не найдена в сохранёнках'); return; }

    editingBook.name = nameValue

    metadataWindowState.setOpened(false)
  }


  return (
    <>
      <div 
        className={c.modal}
        style={{
          width: '100vw',
          height: '100vh',
          opacity: metadataWindowState.opened ? 1 : 0,
          pointerEvents: metadataWindowState.opened ? 'auto' : 'none'
        }}
      >
        <div
          className={c.window}
          style={{
            transform: `translate(${metadataWindowState.opened ? '-50%, -50%' : '-50%, -60%'})`,
            backgroundColor: COLORS.MENU_BACKGROUND,
          }}
        >
          <MenuEdge width={metadataWindowState.opened ? 83 : 0} />
          <p className={c.title}>{book.name} - Метаданные</p>
          <div className={c.formItem}>
            <p className={c.label}>Название:</p>
            <CInput
              styles={{
                width: 128,
                fontSize: 14,
                fontWeight: 500
              }}
              valueState={{value: nameValue, setValue: setNameValue}}
            />
          </div>
          <div className={c.formItem}>
            <p className={c.label}>Автор:</p>
            <CInput
              styles={{
                width: 128,
                fontSize: 14,
                fontWeight: 500
              }}
              valueState={{value: authorValue, setValue: setAuthorValue}}
            />
          </div>
          <div className={c.formItem}>
            <p className={c.label}>Год выпуска:</p>
            <CInput
              styles={{
                width: 128,
                fontSize: 14,
                fontWeight: 500,
                width: 64,
                textAlign: 'center',
              }}
              classes={`${c.input} ${c.yearInput}`}
              keyboard="numeric"
              default={book.year}
              valueState={{value: yearValue, setValue: setYearValue}}
              maxLength={4}
            />
          </div>
          <div className={c.buttons}>
            <button
              className={`${c.button} ${c.buttonCancel}`}
              onClick={cancel}
              style={{
                backgroundColor: COLORS.MENU_BACKGROUND,
                border: `1px solid ${COLORS.ACCENT}`,
              }}
            >
              <p>Отмена</p>
            </button>
            <button
              className={c.button}
              onClick={editBookMetadata}
              style={{
                backgroundColor: COLORS.ACCENT,
                border: 'none',
              }}
            >
              <p style={{ color: COLORS.MENU_BACKGROUND }}>Сохранить</p>
            </button>
          </div>
        </div>
        <ModalBackground />
      </div>
    </>
  )
}