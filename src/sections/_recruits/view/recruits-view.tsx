'use client';

import { Suspense } from 'react';

import RecruitsWho from '../recruits-who';
import RecruitsHero from '../recruits-hero';
import RecruitsRoles from '../recruits-roles';
import RecruitsBuild from '../recruits-build';
import QuickApplyForm from '../quick-apply-form';

// ----------------------------------------------------------------------

export default function RecruitsView() {
  return (
    <>
      <RecruitsHero />
      <RecruitsBuild />
      <RecruitsRoles />
      <RecruitsWho />
      {/* The form reads `?role=` and UTM params via useSearchParams. */}
      <Suspense fallback={null}>
        <QuickApplyForm />
      </Suspense>
    </>
  );
}
