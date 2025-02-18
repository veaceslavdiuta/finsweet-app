import { useParams } from 'react-router-dom';
import CallToActionSection from '../components/CallToActionSection';
import CaseArticle from '../components/CaseArticle';
import CaseInformation from '../components/CaseInformation';
import CaseKeywords from '../components/CaseKeywords';
import { getTemplateById } from '../services/templates.services';
import { useEffect, useState } from 'react';

function ReadCase() {
  const { id } = useParams();
  const [designCase, setDesignCase] = useState();

  useEffect(() => {
    const foundCase = getTemplateById(+id);
    setDesignCase(foundCase);
  }, [id]);

  return (
    <main className="flex flex-col">
      {designCase && (
        <>
          <CaseInformation {...designCase} />
          <CaseArticle {...designCase} />
        </>
      )}
      <CaseKeywords />
      <CallToActionSection />
    </main>
  );
}

export default ReadCase;
