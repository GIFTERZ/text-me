interface Letter {
  id: number;
  receiverName?: string;
  senderName: string;
  contents: string;
  imageUrl: string;
  contactInfo?: string;
}

interface LetterInfo {
  id: number;
  imageUrl: string;
}

export type { Letter, LetterInfo };
