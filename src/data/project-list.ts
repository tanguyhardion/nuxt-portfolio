import { ProjectContext } from '@/model/enums/project-context';
import type { Project } from '@/model/interfaces/project';

export const projectList: Project[] = [
  {
    title: 'Personal Website',
    description: `You're looking at it! I like to think of it as a digital resume, more personal and interactive
    than a traditional one or a LinkedIn profile (although you can find me there too). It's also more fun to make!`,
    duration: '2 months',
    team: 1,
    technologies: ['Vue.js', 'GitHub Pages'],
    context: ProjectContext.Personal,
    image: 'website.png',
    link: 'https://github.com/tanguyhardion/tanguyhardion.github.io'
  },
  {
    title: 'CPage Map',
    description: `A web application displaying an interactive map of CPage's customers, public health institutions in France.
    It shows relevant data and lets CPage collaborators log satisfaction levels after interactions (calls, emails, visits).
    Institutions are marked with a weather code indicating their satisfaction, offering a quick visual of which need more attention.`,
    duration: '2 months',
    team: 1,
    technologies: ['ETL', 'Angular', 'SpringBoot', 'PostgreSQL', 'Leaflet'],
    context: ProjectContext.Work,
    contextLogo: 'cpage.svg',
    image: 'map.png'
  },
  {
    title: 'TensorFlow CNN on CIFAR-100',
    description: `Training of a convolutional neural network (CNN) from scratch to classify images of the CIFAR-100 dataset.
    This project was part of a course on machine learning and deep learning using Python.`,
    duration: '2 months',
    team: 1,
    context: ProjectContext.School,
    contextLogo: 'utt.svg',
    technologies: ['Python', 'TensorFlow', 'Keras', 'HuggingFace'],
    image: 'cnn.png',
    link: 'https://github.com/tanguyhardion/cifar100-cnn'
  },
  {
    title: 'Visualizer',
    description: `Development of a dependencies graph to map solutions and their respective versions,
    enhancing project management and compatibility tracking.
    Restructured the delivery process through custom Maven plugins to streamline deployment.
    Conducted training and quantification of the Llama2 language model for a proof of concept using PyTorch and HuggingFace.
    Integrated RPM file generation into both technical and business projects, improving overall automation and workflow efficiency.`,
    duration: '6 months',
    team: 1,
    context: ProjectContext.Work,
    contextLogo: 'cpage.svg',
    technologies: ['Java', 'RegEx', 'Angular', 'SpringBoot', 'Oracle', 'Sigma.js'],
    image: 'graph.png'
  }
];
