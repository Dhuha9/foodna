import React from 'react';
import ClaimMeal from '../../components/ClaimMeal/ClaimMeal';
import { useParams } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

export default function RecieveFood() {
  const TranslatedClaimMeal = withTranslation()(ClaimMeal);

  const params = useParams();
  return (
    <div>
      <TranslatedClaimMeal id={params.id} />
    </div>
  );
}
