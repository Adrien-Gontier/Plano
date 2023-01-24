package com.masterpiece.plano.service.serviceimpl;


import com.masterpiece.plano.dtos.TaskDto;
import com.masterpiece.plano.entity.Task;
import com.masterpiece.plano.exception.ResourceNotFoundException;
import com.masterpiece.plano.repository.TaskRepository;
import com.masterpiece.plano.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.Optional;

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
    public TaskDto getTaskById(String taskId) {
        var task = taskRepository.findById(taskId).orElseThrow(() ->
                new ResourceNotFoundException("This task doesn't exist"));
        var taskDto = TaskDto.builder()
                .idTask(task.getTaskId())
                .name(task.getName())
                .whyIPassed(task.getWhyIPassed())
                .whyIFailed(task.getWhyIFailed())
                .toDoBetter(task.getToDoBetter())
                .specific(task.getSpecific())
                .measurable(task.getMeasurable())
                .acceptable(task.getAcceptable())
                .realistic(task.getRealistic())
                .temporal(task.getTemporal())
                .estimatedStartDate(task.getEstimatedStartDate())
                .estimatedEndDate(task.getEstimatedEndDate())
                .actualStartDate(task.getActualStartDate())
                .actualEndDate(task.getActualEndDate())
                .build();
        return taskDto;
    }

    @Override
    public Task createTask(Task taskRequest) {
        return taskRepository.save(taskRequest);
    }

    @Override
    public TaskDto updateTask(String taskId, Task taskRequest) {
        Optional<Task> optionalTask = taskRepository.findById(taskId);
        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();
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
            taskRepository.save(task);
            return getTaskById(taskId);
        }

        return null;
    }

    @Override
    public String deleteTask(String taskId) {
        taskRepository.deleteById(taskId);
        return "This task has been deleted successfully";
    }
}
