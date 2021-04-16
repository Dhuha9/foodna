import React from 'react';
import ClaimMeal from '../../components/ClaimMeal/ClaimMeal';
import { useParams } from 'react-router-dom';

export default function RecieveFood() {
  const params = useParams();
  return (
    <div>
      <ClaimMeal id={params.id} />
    </div>
  );
}
