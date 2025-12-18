import { COLORS } from '../constants/ui'
import { LHeader } from '../layout/Library/Header/LHeader'
import { Case } from '../layout/Library/Case/Case'
import { useState } from 'react'
import { AddBook } from '../layout/Library/AddBook/AddBook'
import { SortSearch } from '../layout/Library/SortSearch/SortSearch'
import { MetadataMenuContext } from '../stores/metadataMenu' 
import { NavigationContext } from '../stores/navigation'
import { MetadataWindow } from '../layout/Library/MetadataWindow/MetadataWindow'

export default function Library() {
  const [sortSearchOpened, setSortSearchOpened] = useState(false)
  const [sortType, setSortType] = useState('none')

  const backendData = [
    {
      id: 1,
      name: 'Книга_1',
      author: 'Г. А. Брылов',
      year: 1929,
      path: '',
    },
    {
      id: 2,
      name: 'Обложка книги',
      author: 'Г. А. Брылов',
      year: 1929,
      path: '',
    },
    {
      id: 3,
      name: 'Обложка книги',
      author: 'Г. А. Брылов',
      year: 1929,
      path: '',
    },
  ]

  const [savedBooks, setSavedBooks] = useState(backendData)
  const [selectedBook, setSelectedBook] = useState(savedBooks[0]); 
  const [metadataMenuOpened, setMetadataMenuOpened] = useState(false)

  function toggleSortSearchOpened() {
    setSortSearchOpened(!sortSearchOpened);
  }

  return (
    <>
      <LHeader toggleSortSearchOpened={toggleSortSearchOpened} />

      <MetadataMenuContext.Provider value={{ metadataMenuOpened, setMetadataMenuOpened}}>
        {/* <NavigationContext.Provider value={{navigation}}> */}
          <Case savedBooks={savedBooks} />
        {/* </NavigationContext.Provider> */}
        <MetadataWindow
          book={selectedBook}
          savedBooksState={{ savedBooks, setSavedBooks }}
          metadataWindowState={{ opened: metadataMenuOpened, setOpened: setMetadataMenuOpened }}
        />
      </MetadataMenuContext.Provider>

      <SortSearch
        opened={sortSearchOpened}
        close={() => { setSortSearchOpened(false); }}
        sortTypeState={{ sortType, setSortType }}
      />

      <AddBook sortSearchOpened={sortSearchOpened} />

      <div style={style.background}></div>
    </>
  )
}

const style = {
  background: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100%', height: '100%',
    backgroundColor: COLORS.BACKGROUND.LIBRARY,
    zIndex: -1,
  }
}