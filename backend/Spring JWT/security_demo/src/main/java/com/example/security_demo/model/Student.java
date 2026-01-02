package com.example.security_demo.model;

public class Student {

    private int rollNo;
    private String name;
    private String tech;

    public Student() {
    }

    public Student(int rollNo,String name, String tech) {
        this.rollNo = rollNo;
        this.name = name;
        this.tech = tech;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRollNo() {
        return rollNo;
    }

    public void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }

    public String getTech() {
        return tech;
    }

    public void setTech(String tech) {
        this.tech = tech;
    }
}
