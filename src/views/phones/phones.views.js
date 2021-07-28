import {useEffect} from 'react'
import Row from "react-bootstrap/Row"
import {useDispatch, useSelector} from "react-redux"
import { getPhones } from './phone.actions'
import Phone from '../../components/phone/phone.componet'

const Phones = () => {
    const dispatch = useDispatch()
    const data = useSelector(state=>state.phones)

    useEffect(() => {
       dispatch(getPhones())
    }, [])
    console.log(data)
    return (
        <>
            <Row>
                <h3>phones</h3>  
                {
                    data.isLoading?
                        <h3>Loading</h3>
                    :(
                        
                        data.phones.map(phone=><Phone key={phone.id} phone={phone} />)
                    )
                }
            </Row>
        </>
    )
}
export default Phones
