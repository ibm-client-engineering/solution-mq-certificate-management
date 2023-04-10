---
id: playbook-examples
sidebar_position: 3
title: Playbook Examples
---

### Playbook Example

A typical example of using this role would be to first import it via ansible-galaxy and then point a playbook to it.

An example entry in your requirements file in your roles directory:

```
- name MQ Certificate Management
  src: https://github.com/client-engineering-devops/mq-cert-management-role.git
  name: mq-cert-managment-role
  scm: git
  version: main
```
And our playbook would look like this:

```
- hosts: washington,dallas
  become: true
  become_user: root
  gather_facts: true
  roles:
  - role: mq-cert-management-role
```