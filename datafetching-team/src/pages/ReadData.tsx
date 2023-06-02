import { useTan } from '../hooks/useTan'
import styled from 'styled-components'

const ReadData = () => {
    const { isLoading, data } = useTan()

    return (
        <>
            {
                isLoading ? <div>Loading data...</div> : <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }} >
                    <div>Tanstack</div>
                    <div>
                        <Container>
                            {
                                data?.data?.map((props: any) => (
                                    <Card>
                                        <Image src={props.images[1]}
                                            loading="lazy"
                                        />
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

export default ReadData

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