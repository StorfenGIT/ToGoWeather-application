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

export const Search = Template.bind({});

Search.args = {
    searchCity: 'Stockholm',  // Default starting city
};
