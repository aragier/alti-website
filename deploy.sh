#!/bin/bash
set -e

IMAGE="aragz/ganesha:latest"

echo "🔨 Building image..."
docker compose build

echo "📤 Pushing to Docker Hub..."
docker push "$IMAGE"

echo "✅ Done! Image pushed: $IMAGE"
