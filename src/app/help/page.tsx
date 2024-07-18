"use client";

import { useEffect, useState } from "react";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = "pdf.worker.min.mjs";

// https://stackoverflow.com/questions/78415681/pdf-js-pdfjs-dist-promise-withresolvers-is-not-a-function
require("../../../node_modules/pdfjs-dist/build/pdf.worker.min.mjs");
if (typeof Promise.withResolvers === 'undefined') {
    if (window)
        // @ts-expect-error This does not exist outside of polyfill which this is doing
        window.Promise.withResolvers = function () {
            let resolve, reject;
            const promise = new Promise((res, rej) => {
                resolve = res;
                reject = rej;
            });
            return { promise, resolve, reject };
        };
}

export default function Help() {

    // useEffect(() => {
    //     throw new Error('This is a test error');
    //   }, []);

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(2);
    const [scale, setScale] = useState(1.0); // Initial scale

    const zoomIn = () => setScale(prevScale => prevScale + 0.2);
    const zoomOut = () => setScale(prevScale => Math.max(prevScale - 0.2, 0.5)); // Minimum scale 0.5

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div>
            <div>
                <button onClick={zoomOut}>-</button>
                <button onClick={zoomIn}>+</button>
                <span> Zoom: {scale * 100}% </span>
            </div>
            <Document file="https://pdfobject.com/pdf/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                {/* <Page pageNumber={pageNumber} /> */}
                {Array.from(
                    new Array(numPages),
                    (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            scale={scale}
                        />
                    ),
                )}
            </Document>
            <p>
                {/* Page {pageNumber} of {numPages} */}
            </p>
        </div>
    );
}