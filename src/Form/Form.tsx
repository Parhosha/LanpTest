import "./Form.scss"
import { FC } from 'react'
import BodyForm from "./BodyForm/BodyForm"
import HeaderForm from "./HeaderForm/HeaderForm";

const Form: FC = () => {

    return <div className="form">
        <HeaderForm />
        <hr />
        <BodyForm />
    </div>
}
export default Form