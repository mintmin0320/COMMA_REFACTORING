export interface JoinState {
  email: string | null;
  authNum: string | null;
  password: string | null;
  name: string | null;
  telNum: string | null;
  studentNum: string | null;
  major: string;
  classGroup: string | null;
  classOptions: string[];
  academicStatus: string | null;
}

export type MajorKeys = 'software' | 'information' | 'ai';