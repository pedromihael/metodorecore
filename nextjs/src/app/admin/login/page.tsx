import { loginAction } from '../actions';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#F4F4F5',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E4E4E7',
        borderRadius: 12,
        padding: '40px 48px',
        width: '100%',
        maxWidth: 400,
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <img
            src="/logo/LOGO_RECORE_4_transparent-branco.PNG"
            alt="ReCore"
            style={{ height: 48, marginBottom: 16, filter: 'invert(1) sepia(1) saturate(2) hue-rotate(330deg)' }}
          />
          <p style={{ color: '#71717A', fontSize: 14, margin: 0 }}>Administração</p>
        </div>

        {params.error && (
          <p style={{
            background: '#FEF2F2',
            color: '#991B1B',
            border: '1px solid #FECACA',
            borderRadius: 8,
            padding: '10px 14px',
            fontSize: 14,
            marginBottom: 20,
            textAlign: 'center',
          }}>
            E-mail ou senha incorretos.
          </p>
        )}

        <form action={loginAction}>
          <label style={{ display: 'block', color: '#374151', fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
            E-mail
          </label>
          <input
            type="email"
            name="email"
            required
            autoFocus
            style={{
              width: '100%',
              padding: '10px 14px',
              background: '#FFFFFF',
              border: '1px solid #E4E4E7',
              borderRadius: 8,
              color: '#18181B',
              fontSize: 16,
              outline: 'none',
              marginBottom: 16,
              boxSizing: 'border-box',
            }}
          />
          <label style={{ display: 'block', color: '#374151', fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
            Senha
          </label>
          <input
            type="password"
            name="password"
            required
            style={{
              width: '100%',
              padding: '10px 14px',
              background: '#FFFFFF',
              border: '1px solid #E4E4E7',
              borderRadius: 8,
              color: '#18181B',
              fontSize: 16,
              outline: 'none',
              marginBottom: 20,
              boxSizing: 'border-box',
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: '#A63028',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
