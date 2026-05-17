'use client';

import RecruitsHero from '../recruits-hero';
import RecruitsForm from '../recruits-form';
import RecruitsIntro from '../recruits-intro';
import RecruitsRoles from '../recruits-roles';
import RecruitsLookingFor from '../recruits-looking-for';

// ----------------------------------------------------------------------

export default function RecruitsView() {
  return (
    <>
      <RecruitsHero />
      <RecruitsIntro />
      <RecruitsLookingFor />
      <RecruitsRoles />
      <RecruitsForm />
    </>
  );
}
