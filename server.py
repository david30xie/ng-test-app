import json
import time
from bottle import route, run, abort, request, response


@route('/api/comments/<comment_id>')
def comment(comment_id):
    with open('comments.json') as f:
        comments = json.loads(f.read())

    comment = None
    for i in comments:
        if str(i['id']) == str(comment_id):
            print i['id']
            comment = i
            break
    if not comment:
        abort(404)

    response.set_header('Cache-Control', 'no-cache')
    response.set_header('Access-Control-Allow-Origin', '*')
    response.content_type = 'application/json'
    return json.dumps(comment)


@route('/api/comments', method=['GET', 'POST'])
def comments():
    with open('comments.json') as f:
        comments = json.loads(f.read())

    if request.method == 'POST':
        new_comment = dict(author=request.forms['author'],
                           text=request.forms['text'])
        new_comment['id'] = int(time.time() * 1000)
        comments.append(new_comment)

        with open('comments.json', 'w') as f:
            f.write(json.dumps(comments, indent=4, separators=(',', ': ')))

    response.set_header('Cache-Control', 'no-cache')
    response.set_header('Access-Control-Allow-Origin', '*')
    response.content_type = 'application/json'
    return json.dumps(comments)

run(host='localhost', port=3000)
