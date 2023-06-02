import styled from 'styled-components'
import { useFetchSWR } from '../hooks/useSWR'
import { useState } from "react"
import { postData } from '../utils/APIs'

const UseSWR = () => {
    const { isLoading, data, mutate } = useFetchSWR()
    const [stateText, setStateText] = useState<string>("")
    return (
        <>
            {
                isLoading ? <div>Loading data...</div> : <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }} >
                    <div>SWR</div>
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
                                data?.data?.data.map((props: any) => (
                                    <Card>
                                        {props.title}
                                    </Card>
                                ))
                            }
                        </Container>
                    </div>
                </div>
            }
        </>
    )
}

export default UseSWR


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