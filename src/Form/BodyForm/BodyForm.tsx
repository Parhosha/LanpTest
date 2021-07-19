import { FC, useState } from 'react'
import testLogo from "../images/logoTest.jpg"
import "../../Utils/Animation.scss"

const BodyForm: FC = () => {
    const [style, setStyle] = useState({ border: "", backgroundColor: "" })
    const [loading, setLoading] = useState<string>("Select")

    const dragOver = () => {
        setStyle({ border: "1px dashed #4991E5", backgroundColor: "#F5F9FF" })
    }
    const readFile = (elem: React.ChangeEvent<HTMLInputElement>) => {
        setStyle({ border: "", backgroundColor: "" })
        const FR = new FileReader()

        FR.addEventListener("load", function (e) {
            const prev: any = document.getElementById("preview")
            setLoading("Loading")
            setTimeout(() => {
                prev!.src = e.target!.result
                setLoading("Uploaded")
            }, 2000)
        });
        FR.readAsDataURL(elem.target.files![0]);

    }

    return <div className="bodyForm " style={style}>
        <div className="bodyFormUpload">
            <div className="description">
                <div id={loading === "Loading" ? "animation" : ""} className="logoUpload" >
                    <span></span>
                    <img src={testLogo} id="preview" alt="logo" />
                </div>
                <p>{(() => {
                    switch (loading) {
                        case 'Select':
                            return "Drag & drop here";
                        case 'Loading':
                            return "Uploading";
                        case 'Uploaded':
                            return "Drag & drop here to replace";
                    }
                })()}</p>
                <p>- or -</p>
                <p>Select file to upload</p>
            </div>
            <form action="" onSubmit={(e) => e.preventDefault}>
                <input
                    type="file"
                    onDragOver={() => dragOver()}
                    onChange={((e) => readFile(e))}
                    accept=".jpg, .jpeg, .png"
                />
            </form>
        </div>
    </div>
}
export default BodyForm