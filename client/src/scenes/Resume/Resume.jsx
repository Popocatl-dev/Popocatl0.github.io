import s from './Resume.module.scss';
import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
import { useEffect, useRef, useState } from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import Button from '../../components/UIElements/Button/Button';
//react-pdf
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import { RESUME } from '../../constants/resume';
import { useLanguage } from '../../hooks/localHook/localHook';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
/*
const pdfResume = () =>{
  <Document
      loading={<LinerProgress />}
      file={{
        url: resumeLink,
      }}
    >
      <Page
        onLoadSuccess={removeTextLayerOffset}
        loading={<LinerProgress />}
        width={pdfPageWidth}
        pageNumber={1}
    />
  </Document>
}*/


const Resume = () => {
  const resumeText = useLanguage(RESUME);
  const resumeLink = resumeText.link;
  
  const pdfWrapper = useRef(null);
  /*const [pdfPageWidth, setPdfPageWidth] = useState(null);
  useEffect(() => {
    setPdfPageWidth(
      pdfWrapper.current?.getBoundingClientRect().width || null,
    );
  }, []);

  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll(
      '.react-pdf__Page__textContent',
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  };*/

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            {resumeText.title}
          </h1>
        </div>

        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className={"primary"}
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> {resumeText.download}</span>
        </Button>

        <div className={s.pdfWrapper} ref={pdfWrapper}>
          <iframe src={resumeLink} width="960" height="1080" allow="autoplay"></iframe>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
