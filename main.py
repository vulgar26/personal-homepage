from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def hello_world():
    return {"message": "Hello 网络世界!"}
