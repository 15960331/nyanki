import { getMaxId } from '../getMaxId';

it('returns max id', () => {
  const result = getMaxId([
    {
      id: 1, user_id: '', word: '', meaning: '',
    },
    {
      id: 2, user_id: '', word: '', meaning: '',
    },
    {
      id: 3, user_id: '', word: '', meaning: '',
    },
    {
      id: 4, user_id: '', word: '', meaning: '',
    },
  ]);

  expect(result).toEqual(4);
});

it('returns max id even if data is broken', () => {
  const result = getMaxId([
    {
      id: 5, user_id: '', word: '', meaning: '',
    },
    {
      id: 4, user_id: '', word: '', meaning: '',
    },
    {
      id: 8, user_id: '', word: '', meaning: '',
    },
    {
      id: 4, user_id: '', word: '', meaning: '',
    },
  ]);

  expect(result).toEqual(8);
});

it('returns 0 if provided array has no length', () => {
  const result = getMaxId([]);

  expect(result).toEqual(0);
});
