import Weather from './Weather';

export default {
    title: 'ToGoWeather/Components/Weather',
    component: Weather,
    argTypes: {
        searchCity: {
            control: { type: 'text' },
            description: 'Enter a city name to search for weather',
            defaultValue: 'Stockholm', // Default city
        },
    },
};

const Template = (args) => <Weather {...args} />;

export const Home = Template.bind({});

Home.args = {
    searchCity: 'Stockholm',  // Default starting city
};
