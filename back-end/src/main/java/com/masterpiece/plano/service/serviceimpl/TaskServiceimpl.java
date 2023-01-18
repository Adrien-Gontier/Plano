package com.masterpiece.plano.service.serviceimpl;


import com.masterpiece.plano.entity.Task;
import com.masterpiece.plano.exception.ResourceNotFoundException;
import com.masterpiece.plano.repository.TaskRepository;
import com.masterpiece.plano.service.TaskService;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceimpl implements TaskService {

    private final TaskRepository taskRepository;


    public TaskServiceimpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }


    @Override
    public Iterable getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public Task getTaskById(String taskId) {
        return taskRepository.findById(taskId).orElseThrow(() ->
                new ResourceNotFoundException("This task doesn't exist"));
    }

    @Override
    public Task createTask(Task taskRequest) {
        return taskRepository.save(taskRequest);
    }

    @Override
    public Task updateTask(String taskId, Task taskRequest) {
        var task = getTaskById(taskId);
        task.setName(taskRequest.getName());
        task.setWhyIPassed(taskRequest.getWhyIPassed());
        task.setWhyIFailed(taskRequest.getWhyIFailed());
        task.setToDoBetter(taskRequest.getToDoBetter());
        task.setSpecific(taskRequest.getSpecific());
        task.setMeasurable(taskRequest.getMeasurable());
        task.setAcceptable(taskRequest.getAcceptable());
        task.setRealistic(taskRequest.getRealistic());
        task.setTemporal(taskRequest.getTemporal());
        task.setEstimatedStartDate(taskRequest.getEstimatedStartDate());
        task.setEstimatedEndDate(taskRequest.getEstimatedEndDate());
        task.setActualStartDate(taskRequest.getActualStartDate());
        task.setActualEndDate(taskRequest.getActualEndDate());
        return taskRepository.save(task);
    }

    @Override
    public String deleteTask(String taskId) {
        var task = getTaskById(taskId);
        taskRepository.delete(task);
        return "This task has been deleted successfully";
    }
}
