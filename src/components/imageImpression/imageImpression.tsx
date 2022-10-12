import { Image, Modal } from '@mantine/core'
import { useState } from "react";
import './imageImpression.css'

export function ImageImpression() {

    const imageURLs = [
        "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
        "https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/files%2FVierfachLever.jpg?alt=media&token=30f885b6-339f-41e7-a96c-65433b5417fa",
        "https://images.unsplash.com/photo-1583531172005-814191b8b6c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
        "https://images.unsplash.com/photo-1583426573939-97d09302d76a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
        "https://images.unsplash.com/photo-1583532452513-a02186582ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1583562835057-a62d1beffbf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80",
        "https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/files%2Fkkkbacklever.jpeg?alt=media&token=d9c16e65-aea2-491c-8844-95f8eb3e0cb9",
        "https://images.unsplash.com/photo-1583500557349-fb5238f8d946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
        "https://images.unsplash.com/photo-1583468323330-9032ad490fed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80",
        "https://images.unsplash.com/photo-1583425423320-2386622cd2e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1980&q=80",
        "https://images.unsplash.com/photo-1665493198207-49f755bc5c62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80",
        "https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/files%2FNicolaiWettkampf.png?alt=media&token=c0dbf02d-2100-4cc4-a9b7-bfecba246d71",
        "https://firebasestorage.googleapis.com/v0/b/cali38.appspot.com/o/files%2FFloHut.jpg?alt=media&token=b54a0632-69db-4f0d-9b51-46269ad398d0"
    ]

    function OpenModal(url:string){
        setImageUrl(url);
        setModalOpen(true)
    }

    const [modalOpen, setModalOpen] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    return (
        <div>
            <Modal
                centered
                overlayColor={"black"}
                overlayOpacity={0.55}
                size="auto"
                overlayBlur={3}
                opened={modalOpen}
                withCloseButton={false}
                onClose={() => setModalOpen(false)}
            >
                <Image
                    radius="md"
                    src={imageUrl}
                    alt="Random unsplash image"
                    fit='contain'
                    height={"70vh"}
                />

            </Modal>
            <section className="animated-grid">
                {imageURLs.map((item,index) =>
                    <div
                        key={index}
                        className="card card-tall card-wide"
                        style={{ backgroundImage: "url("+item+")"}}
                        onClick={() => OpenModal(item)}
                    />)}
                    
            </section>
        </div>
    )
}