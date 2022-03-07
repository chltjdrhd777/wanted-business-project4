import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'
import { emojiMenus } from '../redux/sample_data'
import SearchBar from './SearchBar'

const AvailableOptions: NextPage = () => {
  const [searchResult, setSearchResult] = useState<typeof emojiMenus>([])
  return (
    <ListWrapper>
      <SearchBar setSearchResult={setSearchResult} />
      <AvailableWrapper>
        <AvailableTitle>available Options</AvailableTitle>
        {searchResult.length > 0
          ? searchResult.map((el) => {
              return (
                <SingleListEmoji key={el.id}>
                  {el.emoji} &nbsp;&nbsp;&nbsp; {el.name}
                </SingleListEmoji>
              )
            })
          : emojiMenus.map((el) => {
              return (
                <SingleListEmoji key={el.id}>
                  {el.emoji} &nbsp;&nbsp;&nbsp; {el.name}
                </SingleListEmoji>
              )
            })}
      </AvailableWrapper>
    </ListWrapper>
  )
}

const ListWrapper = styled.div``

const AvailableWrapper = styled.div`
  box-shadow: rgba(70, 53, 53, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  border-radius: 15px;

  min-width: 50rem;
  max-width: 50rem;
  height: 80vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  /* align-items: center; */
  overflow: scroll;
`

const AvailableTitle = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  font-family: 'Ubuntu', sans-serif;
  padding: 1.5rem;
  border-bottom: 1px solid lightgray;
`

const SingleListEmoji = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2.5rem;
  padding: 1.5rem;
  border: 1px solid lightgray;

  margin-top: 1rem;

  padding-right: 2.5rem;
`

export default AvailableOptions