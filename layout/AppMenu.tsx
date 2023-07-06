/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import { AppMenuItem } from '../types/types';

const AppMenu = () => {

    const { layoutConfig } = useContext(LayoutContext);
    const model: AppMenuItem[] = [
        {
            label: 'Dashboard',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dasboard' }]
        },
        {
            label: 'Chatting dan Notification',
            items: [
                { label: 'Pesan', icon: 'pi pi-fw pi-comments', to: '/' },
                { label: 'Notification', icon: 'pi pi-fw pi-comment', to: '/' },
            ]
        },
        {
            label: 'Aktivitas',
            items: [
                {
                    label: 'Produk',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Produk 1.1',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark', to: '/dasboard/produk' },
                                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                            ]
                        },
                        {
                            label: 'Submenu 1.2',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                        }
                    ]
                },
                { label: 'Pesanan', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
                { label: 'Penarikan', icon: 'pi pi-fw pi-check-square', to: '/uikit/input' },
                { label: 'Dompet', icon: 'pi pi-fw pi-bookmark', to: '/uikit/floatlabel' },
                { label: 'Pengaturan', icon: 'pi pi-fw pi-exclamation-circle', to: '/uikit/invalidstate' },
            ]
        },
        {
            label: 'Lainya',
            items: [
                { label: 'Video', icon: 'pi pi-video', to: '/' },
                { label: 'Cupon', icon: 'pi pi-gift', to: '/' },
                { label: 'Pesanan', icon: 'pi pi-cart-plus', to: '/' },
                { label: 'Pengikut', icon: 'pi pi-heart', to: '/' },
                { label: 'Galeri', icon: 'pi pi-image', to: '/' },
                { label: 'Info Mangdropship', icon: 'pi pi-info-circle', to: '/' },
            ],
        },
        {
            label: 'Belajar Lagi ?',
            items: [
                {
                    label: 'Documentation',
                    icon: 'pi pi-fw pi-question',
                    to: '/documentation'
                },
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
