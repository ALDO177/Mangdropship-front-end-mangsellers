
import React, { useState, useRef } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { MenuItem } from 'primereact/menuitem';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Dialog } from 'primereact/dialog';

type PropsFromModal = {
    text?: string,
    actived?: boolean,
    label?: string,
    id?: string,
};

type PropsFromStep = {
    actived?: boolean,
    id?: string,
}

export default function StepHorizontal() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const toast = useRef(null) as any;
    const [modalAction, setModalAction] = React.useState<PropsFromModal>({ text: '', actived: false });
    const [stepAction, setStepAction] = React.useState<PropsFromStep>({ id: '1' });

    const items: MenuItem[] = [
        {
            label: 'Langkah Pertama',
            data: 'sdjfiojsiodjgsd  oasjfji asfii',
            icon: 'pi pi-user mt-2',
            disabled: stepAction.id === '1' ? false : true,
            id: '1',
            command: (event) => {
                setModalAction({ text: event?.item.data, actived: true, label: event.item.label, id: event.item.id })
            },
        },
        {
            label: 'Langkah Kedua',
            data: 'sdjfiojsiodjgsd  oasjfji asfii',
            icon: 'pi pi-user mt-2',
            id: '2',
            disabled: (stepAction?.id === '1') && stepAction.actived ? false : true,
            command: (event) => {
                setModalAction({ text: event?.item.data, actived: true, label: event.item.label, id: event.item.id })
            },
        },
        {
            label: 'Langkah Ketiga',
            data: 'sijgoihsf sndgvioshdiohjisd ios sdgsdg',
            icon: 'pi pi-user mt-2',
            id: '3',
            disabled: (stepAction?.id === '2') && stepAction.actived ? false : true,
            command: (event) => {
                setModalAction({ text: event?.item.data, actived: true, label: event.item.label, id: event.item.id })
            },
        },
        {
            label: 'Langkah Keempat',
            data: 'sijgoihsf sndgvioshdiohjisd ios sdgsdg',
            icon: 'pi pi-user mt-2',
            id: '4',
            disabled: (stepAction?.id === '3') && stepAction.actived ? false : true,
            command: (event) => {
                setModalAction({ text: event?.item.data, actived: true, label: event.item.label, id: event.item.id })
            },

        },
        {
            label: 'Langkah Kelima',
            data: 'sijgoihsf sndgvioshdiohjisd ios sdgsdg',
            icon: 'pi pi-user mt-2',
            id: '5',
            disabled: (stepAction?.id === '4') && stepAction.actived ? false : true,
            command: (event) => {
                setModalAction({ text: event?.item.data, actived: true, label: event.item.label, id: event.item.id })
            },

        }
    ];

    const handleClickNextStep = () => {
        setStepAction({ actived: modalAction.actived, id: modalAction?.id })
        setModalAction({ actived: false })
    }

    return (
        <div className="card">
            <Toast ref={toast}></Toast>
            <Steps model={items as any} className='d-none d-xl-block d-xxl-block d-lg-block'
                activeIndex={activeIndex}
                onSelect={(e) => setActiveIndex(e.index)}
                readOnly={false} />
            <Dialog header={modalAction?.label} visible={modalAction.actived} onHide={() => setModalAction({ actived: false })}
                style={{ width: '40vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <p className="m-0">{modalAction?.text}</p>
                {
                    (parseInt(stepAction.id as string) < 4) ? (
                        <button className='btn btn-info btn-lg mx-auto d-block' onClick={handleClickNextStep}>
                            Selanjutnya...
                        </button>
                    ):(
                        <button className='btn btn-info btn-lg mx-auto d-block'>
                            Selesai dan Lanjutkan...
                        </button>
                    )
                }
            </Dialog>
            <div className='d-block d-md-block d-sm-block d-lg-none d-xxl-none d-xl-none'>
                <Accordion activeIndex={0}>
                    <AccordionTab
                        header={
                            <div className="flex align-items-center">
                                <i className="pi pi-calendar mr-2"></i>
                                <span className="vertical-align-middle">Langkah Pertama</span>
                            </div>
                        }>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        header={
                            <div className="flex align-items-center">
                                <i className="pi pi-user mr-2"></i>
                                <span className="vertical-align-middle">Langkah Kedua</span>
                            </div>
                        }
                    >
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        header={
                            <div className="flex align-items-center">
                                <i className="pi pi-search mr-2"></i>
                                <span className="vertical-align-middle">Langkah ketiga</span>
                                <i className="pi pi-cog ml-2 ml-2"></i>
                            </div>
                        }>
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    )
}
