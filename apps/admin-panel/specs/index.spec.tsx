import { render } from '@testing-library/react';

import Index from '../pages/index';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../__mocks__/matchMediaMock'; // Must be imported before the tested file

export function renderWithClient(client: QueryClient, ui: React.ReactElement) {
  const { rerender, ...result } = render(
    <QueryClientProvider client={client}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={client}>{rerenderUi}</QueryClientProvider>
      ),
  };
}

describe('Index', () => {
  let queryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
  });

  it('should render successfully', () => {
    const { baseElement } = renderWithClient(queryClient, <Index />);
    expect(baseElement).toBeTruthy();
  });
});
