import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

export interface InternshipApplication {
  id?: string;
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  currentLevel: string;
  preferredTrack: string;
  preferredDuration: string;
  startDate?: string;
  dailyTimeCommitment?: string;
  preferredMode: string;
  currentSkills?: string;
  portfolioLinks?: string;
  motivation: string;
  openToRelatedTracks: boolean;
  receiveUpdates: boolean;
  submittedAt: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'accepted' | 'rejected';
}

export const submitInternshipApplication = async (formData: Omit<InternshipApplication, 'id' | 'submittedAt' | 'status'>): Promise<void> => {
  try {
    await addDoc(collection(db, 'internshipApplications'), {
      ...formData,
      submittedAt: new Date().toISOString(),
      status: 'pending'
    });
  } catch (error) {
    console.error('Error submitting internship application:', error);
    throw error;
  }
};

export const getInternshipApplications = async (): Promise<InternshipApplication[]> => {
  try {
    const q = query(collection(db, 'internshipApplications'), orderBy('submittedAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as InternshipApplication));
  } catch (error) {
    console.error('Error fetching internship applications:', error);
    throw error;
  }
};