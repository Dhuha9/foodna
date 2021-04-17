import React from 'react';
import MealsPage from '../../components/AvailableMealsPage/MealsPage';
import { withTranslation } from 'react-i18next';

export default function AvailableMeals() {
  const TranslatedMealsPage = withTranslation()(MealsPage);
  return (
    <div>
      <TranslatedMealsPage />
    </div>
  );
}
