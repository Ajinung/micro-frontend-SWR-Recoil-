import styled from "styled-components"
import { useFetch } from "../hooks/useFetch"


const UseEffect = () => {
    const state = useFetch()

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }} >
            <div>useEffect</div>
            <div>
                <Container>
                    {
                        state?.map((props: any) => (
                            <Card>
                                <Image src={props.images[0]}
                                    loading="lazy"
                                />
                            </Card>
                        ))
                    }
                </Container>
            </div>
        </div>
    )
}

export default UseEffect

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
`

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`