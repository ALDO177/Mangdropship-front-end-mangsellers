'use client';
import InfoMessage from "@/component/Alert/Dasboard/infoMessage";
import StepHorizontal from "@/component/Menu/StepHorizontal";
import { Container } from "react-bootstrap";

export default function ProdukPage() {
    return (
        <Container fluid>
            <div className="card">
                <h2 className="text-700 mb-3">Store Produk Anda</h2>
                <InfoMessage severity="success" >
                    <div className="flex align-items-center">
                        <img alt="logo" src="/assets/animated-unscreen.gif" width="32" />
                        <div className="ml-2" style={{ color: `var(--bs-success)` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </InfoMessage>
                <div className="grid mt-3 mb-3">
                    <div className="col-12 xl:col-12">
                        <h4 className="text-700 mb-2">Langkah Upload Produk Gambar</h4>
                        <StepHorizontal/>
                    </div>
                </div>
            </div>
        </Container>
    )
}