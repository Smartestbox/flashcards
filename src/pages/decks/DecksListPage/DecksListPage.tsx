import { ChangeEvent, useState } from 'react'

import { Edit, NoPhoto, PlayCircleOutline, TrashOutline } from '@/assets/icons'
import { Button } from '@/components/ui/Button'
import { Page } from '@/components/ui/Page/Page'
import { Pagination } from '@/components/ui/Pagination'
import { Slider } from '@/components/ui/Slider'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/Table'
import { TabItem, Tabs } from '@/components/ui/Tabs'
import { TextField } from '@/components/ui/TextField'
import { Typography } from '@/components/ui/Typography'
import { useDebounce } from '@/hooks/useDebounce'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
} from '@/services/decks/decks.service'

import s from './DecksListPage.module.scss'

export const DecksListPage = () => {
  const [search, setSearch] = useState<string>('')
  const [sliderRange, setSliderRange] = useState<number[]>([0, 10])
  const [decksOwner, setDecksOwner] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState(10)
  const debouncedSearch = useDebounce(search)
  const { data: minMaxCards } = useGetMinMaxCardsQuery()
  const {
    data: decks,
    isError,
    isLoading,
  } = useGetDecksQuery({
    currentPage,
    itemsPerPage: pageSize,
    maxCardsCount: sliderRange[1],
    minCardsCount: sliderRange[0],
    name: debouncedSearch,
  })
  const [createDeck, { isLoading: isDeckCreating }] = useCreateDeckMutation()
  const [deleteDeck, { isLoading: isDeckDeleting }] = useDeleteDeckMutation()

  if (isError) {
    return <div>Error</div>
  }
  if (isLoading) {
    return <div>Loading...</div>
  }

  const PAGINATION_OPTIONS = [
    { title: '10', value: '10' },
    { title: '15', value: '15' },
    { title: '20', value: '20' },
    { title: '30', value: '30' },
  ]

  const handleChangePage = (page: number) => {
    setCurrentPage(page)
  }
  const handleCardsOwner = (value: string) => {
    setDecksOwner(value)
  }
  const handleClearFilter = () => {
    setSearch('')
    setDecksOwner('all')
    setCurrentPage(1)
  }
  const handleSliderRange = (sliderValues: number[]) => {
    setSliderRange(sliderValues)
    if (currentPage !== 1) {
      setCurrentPage(1)
    }
  }
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleClearSearch = (value: string) => {
    setSearch(value)
  }
  const handlePageSize = (pageSize: string) => {
    setPageSize(+pageSize)
  }

  return (
    <Page>
      <div className={s.Header}>
        <Typography as={'h1'} variant={'h1'}>
          Decks list
        </Typography>
        <Button
          disabled={isDeckCreating}
          onClick={() => createDeck({ name: 'New deck without form. Testing' })}
        >
          Add New Deck
        </Button>
      </div>
      <div className={s.Filters}>
        <TextField
          onChange={handleSearchChange}
          onChangeValue={handleClearSearch}
          placeholder={'Input search'}
          type={'search'}
          value={search}
        />
        <Tabs label={'Show decks cards'} onValueChange={handleCardsOwner} value={decksOwner}>
          <TabItem value={'my'}>My Cards</TabItem>
          <TabItem value={'all'}>All Cards</TabItem>
        </Tabs>
        <Slider max={minMaxCards?.max || 0} onValueChange={handleSliderRange} value={sliderRange} />
        <Button icon={<TrashOutline />} onClick={handleClearFilter} variant={'secondary'}>
          Clear Filter
        </Button>
      </div>
      <Table className={s.Table}>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created by</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {decks?.items.map(deck => (
            <TableRow key={deck.id}>
              <TableCell className={s.TableCell}>
                {deck.cover ? (
                  <img
                    alt={'cover'}
                    height={'48px'}
                    src={deck.cover}
                    style={{ display: 'inline' }}
                  />
                ) : (
                  <NoPhoto style={{ display: 'inline' }} />
                )}
                {deck.name}
              </TableCell>
              <TableCell>{deck.cardsCount}</TableCell>
              <TableCell>{new Date(deck.updated).toLocaleDateString('ru-RU')}</TableCell>
              <TableCell>{deck.author.name}</TableCell>
              <TableCell>
                <Button className={s.Btn} variant={'icon'}>
                  <PlayCircleOutline />
                </Button>
                <Button className={s.Btn} variant={'icon'}>
                  <Edit />
                </Button>
                <Button
                  disabled={isDeckDeleting}
                  onClick={() => deleteDeck(deck.id)}
                  variant={'icon'}
                >
                  <TrashOutline />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        className={s.Pagination}
        currentPage={decks?.pagination.currentPage ?? 1}
        onChangePage={handleChangePage}
        onValueChange={handlePageSize}
        options={PAGINATION_OPTIONS}
        pageSize={pageSize ?? 10}
        totalCount={decks?.pagination.totalItems ?? 0}
        value={String(pageSize)}
      />
    </Page>
  )
}
