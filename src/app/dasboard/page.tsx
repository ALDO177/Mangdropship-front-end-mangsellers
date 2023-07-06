'use client'

// import MangdropshipLoading from "@/Loading/MangdropshipLoading";
// import { signOut, useSession } from "next-auth/react"
// import { redirect } from "next/navigation";
// import React from "react";
// import { Button } from "react-bootstrap";
// import { toast } from 'react-toastify'

// export default function pageDasboard(){
//     const {data: session, status} = useSession({required: true, onUnauthenticated() {
//         toast.error('Anda Telah Keluar dari Account Tautan,  Silahkan Untuk Login Kembali', {
//             theme: 'colored',
//             autoClose: 3000
//         });
//         redirect('/')
//     }});

//     if(status === 'loading') return <MangdropshipLoading/>
//     return(
//         <React.Fragment>
//             <Button variant="danger" onClick={async() => signOut({
//             })}>Logout</Button>
//             <h2>Mangseller Dasboard</h2>
//         </React.Fragment>
//     )
// }

// pageDasboard.auth ={
//     role: "mang-sellers",
//     loading: <h1>Loading...</h1>,
//     unauthorized: "/auth/login", // redirect to this url
// }
/* eslint-disable @next/next/no-img-element */

import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Menu } from 'primereact/menu';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProductService } from '../../../demo/service/ProductService';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import Link from 'next/link';
import { Demo } from '../../../types/types';
import { ChartData, ChartOptions } from 'chart.js';
import { MetaTags } from '@/Meta/Metadata';
import { useSession } from 'next-auth/react';
import InfoMessage from '@/component/Alert/Dasboard/infoMessage';

const lineData: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Pendapatan',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#4e54c8',
            borderColor: '#4e54c8',
            tension: 0.4
        }
    ]
};

const Dashboard = () => {
    const [products, setProducts] = useState<Demo.Product[]>([]);
    const menu1 = useRef<Menu>(null);
    const menu2 = useRef<Menu>(null);
    const [lineOptions, setLineOptions] = useState<ChartOptions>({});
    const { layoutConfig } = useContext(LayoutContext);
    const { data: session, status } = useSession();

    const applyLightTheme = () => {
        const lineOptions: ChartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    const applyDarkTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };
        setLineOptions(lineOptions);
    };

    useEffect(() => {
        ProductService.getProductsSmall().then((data: any) => setProducts(data));
    }, []);

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    }, [layoutConfig.colorScheme]);

    const formatCurrency = (value: number) => {
        return value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    return (
        <React.Fragment>
            <MetaTags title='Dasborad Mangsellers' description='foajsfasfiu ajsbfuisaf ashbfusaf' />
            <h3 className='text-blue-500 mb-3'>Hallo Mangseller, {session?.user?.name?.toLocaleUpperCase()}</h3>
            <InfoMessage severity="info" >
                <div className="flex align-items-center">
                    <img alt="logo" src="/assets/animated-unscreen.gif" width="32" />
                    <div className="ml-2" style={{ color: `var(--bs-info)` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
            </InfoMessage>
            <div className="grid mt-3">
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Pesanan</span>
                                <div className="text-900 font-medium text-xl">152</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-shopping-cart text-blue-500 text-xl" />
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">24 new </span>
                        <span className="text-700">since last visit</span>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Total Pendapatan</span>
                                <div className="text-900 font-medium text-xl">$2.100</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-map-marker text-orange-500 text-xl" />
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">%52+ </span>
                        <span className="text-700">since last week</span>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Total Pelanggan</span>
                                <div className="text-900 font-medium text-xl">28441</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-inbox text-cyan-500 text-xl" />
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">520 </span>
                        <span className="text-700">newly registered</span>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Total Produk</span>
                                <div className="text-900 font-medium text-xl">152</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-comment text-purple-500 text-xl" />
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">85 </span>
                        <span className="text-700">responded</span>
                    </div>
                </div>
                <div className="col-12 xl:col-12">
                    <div className="grid">
                        <div className="col-12 xl:col-6">
                            <div className="card">
                                <h5 className='text-700'>Pendapatan</h5>
                                <Chart type="line" data={lineData} options={lineOptions} />
                            </div>
                        </div>
                        <div className="col-12 xl:col-6">
                            <div className="card">
                                <h5 className='text-700'>Transaksi</h5>
                                <Chart type="line" data={lineData} options={lineOptions} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 xl:col-12">
                    <div className="card">
                        <h5 className='text-700'>Orderan Terbaru</h5>
                        <DataTable value={products} rows={5} paginator responsiveLayout="scroll">
                            <Column header="Image" body={(data) => <img className="shadow-2" src={`/demo/images/product/${data.image}`} alt={data.image} width="50" />} />
                            <Column field="name" header="Name" sortable style={{ width: '35%' }} />
                            <Column field="price" header="Price" sortable style={{ width: '35%' }} body={(data) => formatCurrency(data.price)} />
                            <Column
                                header="View"
                                style={{ width: '15%' }}
                                body={() => (
                                    <>
                                        <Button icon="pi pi-search" text />
                                    </>
                                )}
                            />
                        </DataTable>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;
