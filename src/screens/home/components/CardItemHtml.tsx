import { RiShoppingCart2Fill } from 'react-icons/ri'
import './cardItem.css'
import { VscEdit, VscTrash } from 'react-icons/vsc'

export default function CardItemHtml(): JSX.Element {



    return (
        <div className='container'>
            <div className='alignedHorizontal'>
                <img
                    src='https://static.vecteezy.com/system/resources/thumbnails/044/812/078/small/sleek-desktop-computer-icon-on-a-transparent-background-png.png'
                    style={{
                        height: '48px'
                    }}
                />
                <p>Computador</p>
            </div>
            <p id='description'>Descrição do computador bem bonito aqui para aumentar o texto</p>
            <section className='alignedHorizontal'>
                <div className='sectionInfo'>
                    <h4>Preço</h4>
                    <h5>130.000</h5>
                </div>
                <div className='sectionInfo'>
                    <h4>Marca</h4>
                    <h5>Lenovo</h5>
                </div>
                <div className='sectionInfo'>
                    <h4>Processador</h4>
                    <h5>i9</h5>
                </div>
            </section>
            <section className='alignedHorizontal sectionOptions'>
                <div className='alignedHorizontal'>
                    <RiShoppingCart2Fill
                        style={{
                            height: 20,
                            width: 20,
                            color: "#8133E0"
                        }}
                    />
                    <h5>Vender</h5>
                </div>
                <section className='alignedHorizontal'>
                    <div className='alignedHorizontal'>
                        <VscEdit
                            style={{
                                height: 20,
                                width: 20
                            }}
                        />
                        <h5>Editar</h5>
                    </div>
                    <div className='alignedHorizontal'>
                        <VscTrash
                            style={{
                                height: 20,
                                width: 20,
                                color: 'red'
                            }}
                        />
                        <h5>Apagar</h5>
                    </div>
                </section>
            </section>
        </div>
    )
}