
export enum AppState {
  LANDING = 'LANDING',
  SPECIAL_MESSAGE = 'SPECIAL_MESSAGE',
  MEMORIES = 'MEMORIES',
  WISHES = 'WISHES',
  APOLOGY = 'APOLOGY',
  SURPRISE = 'SURPRISE',
  THANK_YOU = 'THANK_YOU',
  FORM = 'FORM',
  GENERATING = 'GENERATING',
  RESULT = 'RESULT'
}

export enum Occasion {
  BIRTHDAY = 'Ulang Tahun',
  WEDDING = 'Pernikahan',
  GRADUATION = 'Kelulusan',
  HOLIDAY = 'Hari Raya',
  ANNIVERSARY = 'Anniversary',
  OTHER = 'Lainnya'
}

export interface CardData {
  recipient: string;
  sender: string;
  occasion: Occasion;
  tone: string;
  customContext: string;
}

export interface GeneratedContent {
  headline: string;
  message: string;
  poem?: string;
  suggestedTheme: {
    primaryColor: string;
    secondaryColor: string;
    pattern: string;
  };
}
