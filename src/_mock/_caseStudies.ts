import { CONFIG } from 'src/config-global';

import { _mock } from './_mock';
import { _tags, _feedback } from './assets';

// ----------------------------------------------------------------------

const TITLES = [
  'Tosi hyvä mies ikkunan pesijä, jälki ammattimaista.',
  'Terassin rakentamisesta',
  'Apua sijoitusasunnon kunnostamiseen',
  'Tosi hyvä mies ikkunan pesijä, jälki ammattimaista.',
  'Kattovaurioita.',
  'Olen erittäin tyytyväinen sekä työn lopputulokseen, että palveluun! Täysi kymppi.',
];

const CONTENT = `
<h4>Project brief</h4>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>

<h4>How we work</h4>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>
<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>

<h4>Results</h4>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>
<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>
`;

// ----------------------------------------------------------------------

const getCategory = (index: number) => {
  if ([1].includes(index)) return _tags[1];
  if ([2].includes(index)) return _tags[2];
  if ([3].includes(index)) return _tags[3];
  if ([4].includes(index)) return _tags[4];
  if ([5].includes(index)) return _tags[5];
  if ([6].includes(index)) return _tags[6];
  return _tags[0];
};

// ----------------------------------------------------------------------

const getFeedback = (index: number) => {
  if ([1].includes(index)) return _feedback[1];
  if ([2].includes(index)) return _feedback[2];
  if ([3].includes(index)) return _feedback[3];
  if ([4].includes(index)) return _feedback[4];
  if ([5].includes(index)) return _feedback[5];
  if ([6].includes(index)) return _feedback[6];
  return _feedback[0];
};

const getGalleryImgs = () => [...Array(6)].map((_, index) => _mock.image.marketing(index));

export const _caseStudies = TITLES.map((_, index) => ({
  id: _mock.id(index),
  content: CONTENT,
  title: TITLES[index],
  createdAt: _mock.time(index),
  website: 'https://example.com/',
  description: getFeedback(index),
  coverUrl: _mock.image.marketing(index + 1),
  heroUrl: `${CONFIG.assetsDir}/assets/images/marketing/marketing-large-1.webp`,
  how_we_work:
    'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
  results:
    'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
  category: getCategory(index),
  galleryImgs: getGalleryImgs(),
}));
