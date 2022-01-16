import { areItemsValid } from '../areItemsValid';

it('returns true if items are ordered', () => {
  const result = areItemsValid([
    {
      id: 1, user_id: '', word: '', meaning: '',
    },
    {
      id: 2, user_id: '', word: '', meaning: '',
    },
    {
      id: 3, user_id: '', word: '', meaning: '',
    },
  ]);

  expect(result).toBeTruthy();
});

it('returns false if items are not ordered', () => {
  const result = areItemsValid([
    {
      id: 1, user_id: '', word: '', meaning: '',
    },
    {
      id: 3, user_id: '', word: '', meaning: '',
    },
    {
      id: 2, user_id: '', word: '', meaning: '',
    },
  ]);

  expect(result).toBeFalsy();
});

it('returns true if empty array is provided', () => {
  const result = areItemsValid([]);

  expect(result).toBeTruthy();
});
