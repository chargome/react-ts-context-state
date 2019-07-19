export interface AuthState {
  user: string;
  isAuthenticating: boolean;
  error: string;
}

export interface LangState {
  selected: string;
}

export interface AppState {
  lang: LangState;
  auth: AuthState;
}
