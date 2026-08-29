import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import logoImg from '@/assets/logo.png';

export const Route = createFileRoute('/termos')({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: 'Termos de Uso | Odonto Websites' },
      { name: 'description', content: 'Termos de uso da Odonto Websites.' }
    ]
  })
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <Link to="/" className="mb-8 inline-block">
        <img src={logoImg} alt="Odonto Websites Logo" className="h-10 w-auto object-contain" />
      </Link>
      <h1 className="text-4xl font-display font-bold mb-4">Termos de Uso</h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        Esta página está em construção. Em breve você encontrará aqui os termos e condições de uso dos nossos serviços.
      </p>
      <Button asChild variant="outline">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Home
        </Link>
      </Button>
    </div>
  );
}
