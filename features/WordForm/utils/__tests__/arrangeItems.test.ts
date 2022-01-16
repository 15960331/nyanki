import { arrangeItems } from '../arrangeItems';

it('returns arranged items', () => {
  const result = arrangeItems([
    {
      id: 5, user_id: '', word: '', meaning: '',
    },
    {
      id: 3, user_id: '', word: '', meaning: '',
    },
    {
      id: 2, user_id: '', word: '', meaning: '',
    },
    {
      id: 4, user_id: '', word: '', meaning: '',
    },
  ]);

  expect(result).toEqual([
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
});

it('returns arranged items even if doubled items are provided', () => {
  const result = arrangeItems([
    {
      id: 1, user_id: '', word: '', meaning: '',
    },
    {
      id: 3, user_id: '', word: '', meaning: '',
    },
    {
      id: 3, user_id: '', word: '', meaning: '',
    },
    {
      id: 4, user_id: '', word: '', meaning: '',
    },
  ]);

  expect(result).toEqual([
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
});

it('returns empty array if empty array is provided', () => {
  const result = arrangeItems([]);

  expect(result).toEqual([]);
});
