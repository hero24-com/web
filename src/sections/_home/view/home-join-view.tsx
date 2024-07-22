'use client';



import HomeJoin from '../join/home-join';
import HomeJoinOurMission from '../join/home-join-our-mission';
import HomeJoinForm from '../join/home-join-form';

// ----------------------------------------------------------------------

export default function HomeJoinView() {
  return (
    <>
      <HomeJoin />

      <HomeJoinOurMission />

      <HomeJoinForm formId="27ee7ed3-9acc-4c8f-ae73-bcff383874bd" />
    </>
  );
}
