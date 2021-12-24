import middy from 'middy';

import { customJsonBodyParser } from '@/middlewares/customJsonBodyParser';

import { APIGatewayEvent } from '@/aws/types';
import { APIGatewayResponse } from '@/aws/utils';
import { apiGatewayResponse } from '@/middlewares/apiGateWayResponse';

async function rawHandler(
	event: APIGatewayEvent<null>,
): Promise<APIGatewayResponse<string>> {
	// eslint-disable-next-line no-console
	console.log(`event: ${JSON.stringify(event)}`);

	return 'Hello world!';
}

export const handler = middy(rawHandler)
	.use(customJsonBodyParser())
	.use(
		apiGatewayResponse<APIGatewayEvent<null>, APIGatewayResponse<string>>(),
	);

export default rawHandler;
