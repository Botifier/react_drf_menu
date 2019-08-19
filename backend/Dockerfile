FROM python:3.6.8
ENV DOCKERIZED True
COPY ./requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip install -r requirements.txt
COPY . /app
RUN python manage.py migrate
