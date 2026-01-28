import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { SelectedProject } from "./components/SelectedProject";


function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // null, undefined
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    const taskId = Math.random();
    setProjectsState(prev => {
        const newTask = {
            text,
            id: taskId,
            projectId: prev.selectedProjectId
        }

        return {
            ...prev,
            tasks: [...prev.tasks, newTask]
        }
    });
  }

  function handleDeleteTask(id) {
        setProjectsState(prev => {
            return {
                ...prev,
                tasks: prev.tasks.filter(t => t.id !== id)
            }
        });
  }

  function handleStartAddProject() {
    setProjectsState(prev => {
        return {
            ...prev,
            selectedProjectId: null
        }
    });
  }

function handleCancelProject() {
    setProjectsState(prev => {
        return {
            ...prev,
            selectedProjectId: undefined
        }
    });
  }

  function handleAddProject(projectData) {
    const projectId = Math.random();
    setProjectsState(prev => {
        const newProject = {
            ...projectData,
            id: projectId,
        }

        return {
            ...prev,
            projects: [...prev.projects, newProject],
            selectedProjectId: undefined
        }
    });
  }

  function handleSelectProject(id) {
    setProjectsState(prev => {
        return {
            ...prev,
            selectedProjectId: id
        }
    });
  }

  function handleDeleteProject() {
    setProjectsState(prev => {
        return {
            ...prev,
            selectedProjectId: undefined,
            projects: prev.projects.filter(p => p.id !== prev.selectedProjectId)
        }
    });
  }

  const selectedProject = projectsState.projects.find(p => p.id === projectsState.selectedProjectId);

  let content = <SelectedProject 
        project={selectedProject}
        onDelete={handleDeleteProject} 
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectsState.tasks}
    />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancelProject={handleCancelProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject} 
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
