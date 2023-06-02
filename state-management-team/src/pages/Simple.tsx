import styled from 'styled-components'
import { useState, useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { iData, readCount, readData, readText } from '../global/stateManagement'
import useSWR from "swr"
import axios from 'axios'

const Simple = () => {
    const [stateText, setStateText] = useState<string>("")

    // const [data, setState] = useRecoilState(readCount)

    const [text, setText] = useRecoilState(readText)
    const [todoData, setTodoData] = useRecoilState(readData)

    // const addCount = () => {
    //     setState(el => el + 1)
    // }

    //post API calls
    const url = "http://localhost:1122"
    const getData = async () => {
        return await axios.get(url)
    }
    const postData = async (data: iData) => {
        return await axios.post(url, data)
    }

    const { data, mutate } = useSWR('data', getData)

    useEffect(() => {
        setTodoData(data?.data.data)

    }, [data])

    return (
        <>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%", marginTop: "40px" }} >
                <div>State Management</div>
                <Input
                    placeholder="Enter a task"
                    value={stateText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setStateText(e.target.value)
                    }}
                />
                <Button
                    onClick={() => {
                        postData({ title: stateText })
                        mutate()
                        setStateText("")
                    }}
                >
                    Enter
                </Button>

                <div>

                    <Container>
                        {
                            todoData.map(({ title, _id }: iData) => (
                                <Card key={_id} > {title}  </Card>
                            ))
                        }

                    </Container>
                </div>
            </div>

        </>
    )
}

export default Simple

const Input = styled.input`
padding-left:10px;
width: 350px;
height: 35px;
border: 1px solid silver;
border-radius:3px;
outline: none;
`

const Button = styled.div`
margin: 10px;
background-color: darkorange;
color: white;
width: 100px;
padding: 10px 25px;
border-radius: 3px;
text-transform: uppercase;
font-weight: bold;
font-size: 12px;
transition: all 350ms;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
:hover{
    cursor: pointer;
    transform: translate(0px, -5px);
}
`


const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const Card = styled.div`
border-radius: 3px;
width: 150px;
height: 180px;
border: 1px solid silver;
margin: 5px;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`