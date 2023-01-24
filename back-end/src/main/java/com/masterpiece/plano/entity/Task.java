package com.masterpiece.plano.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sun.istack.NotNull;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.Date;

@JsonIdentityInfo(generator= ObjectIdGenerators.IntSequenceGenerator.class)
@Entity
@Table(name = "task")
public class Task {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String taskId;

    @Column(length = 150, nullable = false)
    @NotNull
    private String name;

    @Type(type = "text")
    @Column(name = "why_i_passed", nullable = true)
    @Nullable
    private String whyIPassed;

    @Type(type = "text")
    @Column(name = "why_i_failed", nullable = true)
    @Nullable
    private String whyIFailed;


    @Type(type = "text")
    @Column(name = "to_do_better", nullable = true)
    @Nullable
    private String toDoBetter;


    @Column(columnDefinition = "boolean default false", nullable = false, name = "`specific`")
    @NotNull
    private Boolean specific = false;

    @Column(columnDefinition = "boolean default false", nullable = false, name = "`measurable`")
    @NotNull
    private Boolean measurable = false;

    @Column(columnDefinition = "boolean default false", nullable = false, name = "`acceptable`")
    @NotNull
    private Boolean acceptable = false;

    @Column(columnDefinition = "boolean default false", nullable = false, name = "`realistic`")
    @NotNull
    private Boolean realistic = false;

    @Column(columnDefinition = "boolean default false", nullable = false, name = "`temporal`")
    @NotNull
    private Boolean temporal = false;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(nullable = true, name = "estimated_start_date")
    @Nullable
    private Date estimatedStartDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(nullable = true, name = "estimated_end_date")
    @Nullable
    private Date estimatedEndDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(nullable = true, name = "actual_start_date")
    @Nullable
    private Date actualStartDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(nullable = true, name = "actual_end_date")
    @Nullable
    private Date actualEndDate;


    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinTable(name= "project_task",
            joinColumns = @JoinColumn(name = "taskId"),
            inverseJoinColumns = @JoinColumn(name = "projectId"))
    private Project project;


    public Task() {
    }

    public Task(String taskId, String name, @Nullable String whyIPassed, @Nullable String whyIFailed, @Nullable String toDoBetter, Boolean specific, Boolean measurable, Boolean acceptable, Boolean realistic, Boolean temporal, @Nullable Date estimatedStartDate, @Nullable Date estimatedEndDate, @Nullable Date actualStartDate, @Nullable Date actualEndDate, Project project) {
        this.taskId = taskId;
        this.name = name;
        this.whyIPassed = whyIPassed;
        this.whyIFailed = whyIFailed;
        this.toDoBetter = toDoBetter;
        this.specific = specific;
        this.measurable = measurable;
        this.acceptable = acceptable;
        this.realistic = realistic;
        this.temporal = temporal;
        this.estimatedStartDate = estimatedStartDate;
        this.estimatedEndDate = estimatedEndDate;
        this.actualStartDate = actualStartDate;
        this.actualEndDate = actualEndDate;
        this.project = project;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getWhyIPassed() {
        return whyIPassed;
    }

    public void setWhyIPassed(String whyIPassed) {
        this.whyIPassed = whyIPassed;
    }

    public String getWhyIFailed() {
        return whyIFailed;
    }

    public void setWhyIFailed(String whyIFailed) {
        this.whyIFailed = whyIFailed;
    }

    public String getToDoBetter() {
        return toDoBetter;
    }

    public void setToDoBetter(String toDoBetter) {
        this.toDoBetter = toDoBetter;
    }

    public Boolean getSpecific() {
        return specific;
    }

    public void setSpecific(Boolean specific) {
        this.specific = specific;
    }

    public Boolean getMeasurable() {
        return measurable;
    }

    public void setMeasurable(Boolean measurable) {
        this.measurable = measurable;
    }

    public Boolean getAcceptable() {
        return acceptable;
    }

    public void setAcceptable(Boolean acceptable) {
        this.acceptable = acceptable;
    }

    public Boolean getRealistic() {
        return realistic;
    }

    public void setRealistic(Boolean realistic) {
        this.realistic = realistic;
    }

    public Boolean getTemporal() {
        return temporal;
    }

    public void setTemporal(Boolean temporal) {
        this.temporal = temporal;
    }

    @Nullable
    public Date getEstimatedStartDate() {
        return estimatedStartDate;
    }

    public void setEstimatedStartDate(@Nullable Date estimatedStartDate) {
        this.estimatedStartDate = estimatedStartDate;
    }

    @Nullable
    public Date getEstimatedEndDate() {
        return estimatedEndDate;
    }

    public void setEstimatedEndDate(@Nullable Date estimatedEndDate) {
        this.estimatedEndDate = estimatedEndDate;
    }

    @Nullable
    public Date getActualStartDate() {
        return actualStartDate;
    }

    public void setActualStartDate(@Nullable Date actualStartDate) {
        this.actualStartDate = actualStartDate;
    }

    @Nullable
    public Date getActualEndDate() {
        return actualEndDate;
    }

    public void setActualEndDate(@Nullable Date actualEndDate) {
        this.actualEndDate = actualEndDate;
    }


    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}
