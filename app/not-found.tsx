import V3Shell from '@/components/v3/V3Shell';
import NotFound from '@/components/v3/NotFound';

export const metadata = {
  title: 'Page not found',
  description: "The page you're looking for doesn't exist.",
};

export default function NotFoundPage() {
  return (
    <V3Shell>
      <NotFound />
    </V3Shell>
  );
}
