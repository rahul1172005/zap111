import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';

export interface ContactSubmission {
  id?: string;
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  projectType: string;
  budget: string;
  timeline: string;
  startDate?: string;
  contactMethod: string;
  links?: string;
  message: string;
  newsletter: boolean;
  termsAccepted: boolean;
  submittedAt: string;
}

export const submitContactForm = async (formData: Omit<ContactSubmission, 'id' | 'submittedAt'>): Promise<void> => {
  try {
    await addDoc(collection(db, 'contactSubmissions'), {
      ...formData,
      submittedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

export const getContactSubmissions = async (): Promise<ContactSubmission[]> => {
  try {
    const q = query(collection(db, 'contactSubmissions'), orderBy('submittedAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as ContactSubmission));
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    throw error;
  }
};